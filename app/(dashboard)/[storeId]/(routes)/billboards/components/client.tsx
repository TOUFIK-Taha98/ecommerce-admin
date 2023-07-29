"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

export const BillboardClient = () => {
  const router = useRouter();
  const params = useParams();
  return (
    <div className="flex items-center justify-between">
      <Heading
        title="Bannières (0)"
        description="Gestion des bannières du site."
      />
      <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
        <Plus className="mr-2 h-4 w-4" /> Ajouter
      </Button>
    </div>
  );
};
