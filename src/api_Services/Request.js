import Supabase from "./supabase";

export async function getPojects() {
  let { data, error } = await Supabase.from("myproject")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    throw new Error("Projects could not be loaded");
  }
  return data;
}

export async function handleMessage(obj) {
  const { data, error } = await Supabase.from("contact").insert(obj);
  if (error) {
    throw new Error("Error sending message");
  }
  return data;
}
