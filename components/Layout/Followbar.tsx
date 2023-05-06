import useUsers from "@/hooks/useUsers";
import { Avatar } from "../Avatar";

export const Followbar = () => {
  const { data: users = [] } = useUsers();

  if (users.length === 0) {
    return null;
  }

  return (
    <div className="hidden px-6 py-4 lg:block">
      <div className="rounded-xl bg-slate-800 p-4">
        <h2 className="text-center text-xl font-semibold text-neutral-300">
          Who to follow
        </h2>
        <div className=" mt-4 flex flex-col gap-6">
          {users.map((user: Record<string, any>) => (
            <div key={user.id} className="flex flex-row gap-4">
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className="text-sm, font-semibold text-neutral-300">
                  {user.name}
                </p>
                <p className="text-sm text-neutral-400">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
