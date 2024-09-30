import { Service } from "@/types/service.type";
import { deleteService } from "@/utils/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteService = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteService,

    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ["services"] });

      const previousServices = queryClient.getQueryData<Service[]>([
        "services",
      ]);

      queryClient.setQueryData(["services"], (old: Service[] | undefined) =>
        old ? old.filter((service) => service._id !== id) : []
      );

      return { previousServices };
    },

    onError: (err, id, context) => {
      queryClient.setQueryData(["services"], context?.previousServices);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });

  return {
    ...mutation,
  };
};

export default useDeleteService;
