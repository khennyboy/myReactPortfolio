import { useQuery } from "@tanstack/react-query";
import { getPojects } from "../api_Services/Request";

export const useProjects = () => {
  const {
    isLoading,
    data: projects,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getPojects,
    retry: false,
    // refetchInterval: false
  });

  return { isLoading, projects, error, isSuccess };
};
