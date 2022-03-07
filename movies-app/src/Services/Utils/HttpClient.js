class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    let body = null;
    await fetch(`${this.baseURL}${path}`)
		.then(res => {
      body = res.json()
    })
		.catch(e => {
			console.warn(e);
		});
    return body;

  }
}

export default HttpClient;