const BASE_URL = "api/activity-notice/all";

const getActivityNotice = async () => {
  const response = await fetch(BASE_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export { getActivityNotice };
