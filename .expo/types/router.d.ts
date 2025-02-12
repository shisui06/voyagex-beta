/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/DestinationDetailScreen`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/DestinationsMapScreen` | `/DestinationsMapScreen`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/FavoritesScreen` | `/FavoritesScreen`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/DestinationDetailScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/DestinationsMapScreen` | `/DestinationsMapScreen`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/FavoritesScreen` | `/FavoritesScreen`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/DestinationDetailScreen${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/DestinationsMapScreen${`?${string}` | `#${string}` | ''}` | `/DestinationsMapScreen${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/FavoritesScreen${`?${string}` | `#${string}` | ''}` | `/FavoritesScreen${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/DestinationDetailScreen`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/DestinationsMapScreen` | `/DestinationsMapScreen`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/FavoritesScreen` | `/FavoritesScreen`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; };
    }
  }
}
