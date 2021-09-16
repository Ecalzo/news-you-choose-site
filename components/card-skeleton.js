import Skeleton from "@material-ui/lab/Skeleton";

export default function CardSkeleton() {
  return (
    <div className="card-skeleton">
      <Skeleton variant="rect" width={250} height={200} />
      <Skeleton variant="text" width={250} />
      <Skeleton variant="text" width={150} />
    </div>
  );
}
