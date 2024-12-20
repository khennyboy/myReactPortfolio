import { useQuery } from "@tanstack/react-query";
import { getPojects } from "../api_Services/Request";

export const useProjects = () => {
  const {
    isPending: isLoading,
    data: projects,
    error,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getPojects,
    retry: false,
    // refetchInterval: false
  });

  return { isLoading, projects, isError, error };
};
