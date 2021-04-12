export const baseServer = () =>
  new Promise<{ user: string }>((resolve, reject) => {
    setTimeout(() => {
      resolve({ user: "user message" });
    }, 2000);
  });
