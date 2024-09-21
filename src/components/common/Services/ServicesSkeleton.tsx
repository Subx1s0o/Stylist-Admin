import Skeleton from "react-loading-skeleton";

export default function ServicesSkeleton() {
  return (
    <div>
      {[...Array(7)].map((_, index) => (
        <Skeleton
          key={index}
          width="100%"
          height={64}
          style={{ marginBottom: "12px", borderRadius: "12px" }}
          baseColor="#B5AFAE"
          highlightColor="#ECE8E7"
        />
      ))}
    </div>
  );
}
