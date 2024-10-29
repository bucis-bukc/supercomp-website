import { cn } from "@/lib/utils";
import { Badge } from "lucide-react";

export default function Tag({
  title,
  className,
}: {
  title: string;
  className: string;
}) {
  return <Badge className={cn(className)}>{title}</Badge>;
}
