"use client";
import { useEffect, useState } from "react";

export function useGetAbout() {
  // En componentes cliente debes usar variables con prefijo NEXT_PUBLIC_
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN; // También debe tener prefijo NEXT_PUBLIC_

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (!backendUrl) {
        setError("URL del backend no configurada");
        setLoading(false);
        return;
      }

      const url = `${backendUrl}/api/about?fields[0]=nameCompany&fields[1]=description&fields[2]=mission&fields[3]=vision&fields[4]=values&populate[logo][fields][0]=url`;

      try {
        const headers: HeadersInit = {
          "Content-Type": "application/json",
        };

        // Solo añadir el token si existe
        if (strapiToken) {
          headers.Authorization = `Bearer ${strapiToken}`;
        }

        const response = await fetch(url, { headers });

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const json = await response.json();
        setResult(json.data);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [backendUrl, strapiToken]);

  return { result, loading, error };
}
