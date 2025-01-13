import { InfoTooltip } from "@/components/info-tooltip";
import { ProviderTable } from "@/components/provider-table";
import { getCountryName } from "@/lib/utils";
import { tmdb } from "@/services/tmdb/api";
import { WatchLocale } from "@/services/tmdb/models";
import { cookies } from "next/headers";

interface MediaWatchProvidersProps {
  id: string;
  type: "movie" | "tv";
}

export const MediaWatchProviders: React.FC<MediaWatchProvidersProps> = async ({
  id,
  type,
}) => {
  const { results } = await tmdb[type].providers({ id });

  const region = ((await cookies()).get("region")?.value ??
    "US") as keyof WatchLocale;
  const country = getCountryName(region);

  return (
    <div className="space-y-6 rounded-md border p-6">
      <div>
        <h2 className="flex items-center gap-2 text-lg font-medium">
          Where to Watch
          <InfoTooltip className="w-60">
            Currently showing providers for{" "}
            <span className="underline">{country}</span> You can change your
            preferred region in the settings
          </InfoTooltip>
        </h2>
        <p className="text-muted-foreground">
          Stream, buy or rent this {type === "tv" ? "tv show" : "movie"} from
          the providers below.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid gap-4 lg:grid-cols-3">
          <ProviderTable
            title="Stream"
            providers={results?.[region]?.flatrate}
          />
          <ProviderTable title="Buy" providers={results?.[region]?.buy} />
          <ProviderTable title="Rent" providers={results?.[region]?.rent} />
        </div>
      </div>
    </div>
  );
};
