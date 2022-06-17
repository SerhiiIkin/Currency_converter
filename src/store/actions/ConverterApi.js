class ConverterApi {
    static URL =
        "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11";

    static async getData() {
        const res = await fetch(this.URL);
        const failText = "Can't get todo list";
        return this.checkRes(res, failText);
    }

    static checkRes(res, failText) {
        return res.ok ? res.json() : new Error(failText);
    }
}
export default ConverterApi;
