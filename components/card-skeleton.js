import Skeleton from "@material-ui/lab/Skeleton";

export default function CardSkeleton() {
  return (
    <div className="card-skeleton">
      <Skeleton variant="rect" width={300} height={200} />
      <Skeleton variant="text" width={300} />
      <Skeleton width="60%" />
    </div>
  );
}
