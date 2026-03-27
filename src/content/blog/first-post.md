---
title: 'Thinking in react query'
description: 'A simple mental model re-wiring required to use Tanstack Query(aka react query)'
pubDate: 'Feb 14 2026'
heroImage: ''
---

You might have came across this awesome data fetching thats improves DX, & minimizes the react effects & states while fetching or updating data on your applications, &  an inbuilt caching layer where we can specify its evictions, TTL etc… 

Im not gonna tell you syntax, or best practices in this blog, this is just a mental model re-wiring for those who are starting to use (or) catching up after long time using the normal fetching libraries like axios or fetch methods.

#### 1. Obvious state management mandates...

While implementing api call you need to handle all states for loading, errors, actualData and all, may be you would use seperate useState on react component, or you would have a specific keys for each of them in store or context. The thing here is you need to manually maintain all depending states properly like handling loading state to false during error, or setting loading state to true on triggering call etc.. , And especially while using it in react, we might need to wrap all of them in useEffect, put in dependencies and dive into their dependend hells...

Some ex:
```js
useEffect(function onload() {
	setLoading(true);
	fetch().then(res => {
		setData(res.data);
		setLoading(false);
	}).catch(err => {
			setLoading(false);
			setError(err);
	});
}, []);
```

Now imagine if you're making 2 or more fetch calls on a page, code will look messy and hard to maintain & understand.

Using react query eliminates all of these gymastics that you're doing.

Ex:

```js

const { data, isLoading, error } = useQuery('key', fetchFn);

const { data: ListData, isLoading: isListLoading, error: listError } = useQuery('key2', fetchFn2);

```

See how simple the fetching looks now. There also ways to conditionally call fetch using `enabled` flag, you can also pass in dynamic state or store values to key, it will refetch for every changes of key.

#### 2. The hidden cache.

Every `useQuery` hook mounted on a component comes with a cost of having its response data cached on the session, to understand this properly we need to demistify about `staleTime` and `cacheTime`.

The defaults given to `cacheTime` is 5minutes and `staleTime` is 0seconds, however you can modify this either globally while initializing the queryClient or modify on per query basis depending upon the needs.

`staleTime` referes how long is data the data is fresh/valid, while `cacheTime` refers how long the data will live untill its garbage collected.

To understand this better using our news application, lets assume we have new list query mounted on the home page with stale time of 2 minutes, meaning the news data fetched from server stays fresh in for two minutes untill it has mounted for the first time.

```js
// Home page
const { data: newsList } = useQuery({
  queryKey: ['news', 'list', 'all'],
  queryFn: () => ...,
  staleTime: 1000 * 60 * 5, // 5 minutes.
})
```

And lets assume the user have finished reading the 1st news within 3 minutes, and he comes back to home page, now even though the component is remounted our newsList query will not fire a network call since we have marked the query data to be fresh for 5 minutes.

> Note: incomplete - say about cacheTime and staleTime 


#### 3. `key` is the key...

We would, need to provide key and promise to `useQuery` hook, where promise's resolution or rejection is linked to the key and its available across the app. Consider this scenario of a news application,

1. Lets say we are using `['news', 'info', newsId]` as the query key, consider `newsId='top'` for the home page, where we will display top trending news.

2. Lets say we are using `['news', 'list', category]` on the list page, where we will display all news with categories like sports, economics, social etc.. Therefore for the initial load `category='all'` and while doing filter `category` will be dynamic, and react query will trigger promise for every change in value of keys we provide.

3. While clicking on each news, we will render a new component (could be page or modal) with `['news', 'info', newsId]` as the query key, where `newsId` would be prop to the component. If user revisits the same news, data will be served from cache, while it also fetches the data in background to update the cache as well as state of our component.

4. Imagine below the actual news content we need to render a minimal list of similary category news, here we can re-use the same query key `['news', 'list', category]` and render them. Considering its stale time to be 5 to 10mins, if the user had drilled down to many pages of similar category news we can re-use data from the cache for this time session instead of making a new api call every time just to view similar news.

Therefore the `key`(cache key) you're providing to `useQuery` is the acts both as cache identifier as well as **dependency**,

#### 5. Acts as global server state and connect all dots.

Think of every api call that you make will live along with user's session on the browser untill he reloads / closes your tab. Since we use react query for fetching data from our backend server we can call it as a `server state` and this server state needs a key to uniquely identify data across the session. Thus utilization of proper keys & server state via react query across different component reduces the usage of external stores like redux, zustand etc... Remember it just minimizes the usage of these store but doesn't completely eliminate the need for them.

To understand this more better lets consider our same news application and consider we’re  having following features

- collapsible left nav with categories
- focus mode that highlights key context of news
- read aloud mode
- text size & color switcher

We can categoriese all these actions as client state and use external stores for them, while the key underlying data acts as a server state. 

But theres a catch, in certain scenario we need to interlace both client and server state together, take above example where we had a categories for news list page, we can have category as a client state that reacts instantly to user change event and fetches data behind the scenes by simple including category on the querykey.
Let consider another scenario, where we’re having user details page where in he can modify his name, region, other vital details, these are obviously needed to be a client data due to user interactions, while submitting the changes it transforms to be server data saving all these vitals, for these kinda scenarios optimistic mutation/updates kicks in, here we assume the change api call to be successfull and perform stuff we would do in happy path, if in case update api has failed we would just revert back to user form stating some error has occured.

#### 3. Invalidation & Refetchings

Assume you're a 
