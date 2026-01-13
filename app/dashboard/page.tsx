"use client";

import { useEffect, useState } from "react";
import { getToken, logout } from "@/lib/authClient";
import { useRouter } from "next/navigation";
import Link from "next/link";

type User = {
  id: string;
  name: string;
  email: string;
};

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/login");
      return;
    }

    fetch("/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(setUsers);
  }, []);

  async function createUser() {
  const token = getToken();

  await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: "New User",
      email: "new@test.com",
      password: "123456",
    }),
  });
}


  return (
    <div>
      <h1>Dashboard</h1>
      <Link className='btn btn-primary' href={'/posts'}>Posts</Link>

      <button onClick={() => {
        logout();
        router.push("/login");
      }}>
        Logout
      </button>

      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
