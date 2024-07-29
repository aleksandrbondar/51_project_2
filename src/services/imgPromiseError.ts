export function imgPromise(imgUrlData: string[]) {
  imgUrlData.map((url) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve()
      img.onerror = () => reject();
    });
  });
}