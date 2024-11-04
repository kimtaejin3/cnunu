const BASE_URL = "http://localhost:8080/activity-notice/all";

const getActivityNotice = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export { getActivityNotice };
