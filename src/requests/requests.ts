type Request = (url: string) => Promise<Response>;
type RequestWithPayload = (url: string, data: object) => Promise<Response>;

export const POST: RequestWithPayload = (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
};

export const GET: Request = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const PUT: RequestWithPayload = (url, data) => {
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
};

export const DELETE: Request = (url) => {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
