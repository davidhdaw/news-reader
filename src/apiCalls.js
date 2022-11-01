export const getTopStories = async () => {
  const response = await fetch(
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=gA6bGsqWRIIqrkLurNZV68Q7jt8HaRPt"
  );
  if (!response.ok) {
    throw new Error(response.status);
  } else {
    return await response.json();
  }
};

export const getSectionStories = async (section) => {
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=gA6bGsqWRIIqrkLurNZV68Q7jt8HaRPt`
    );
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      return await response.json();
    }
  };