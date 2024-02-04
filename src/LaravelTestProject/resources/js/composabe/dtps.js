import { ref } from "vue";
import axios from "axios";

axios.defaults.baseURL = "http://localhost/api/v1";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post[
    ("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept")
];

export default function useDtps() {
    const dtps = ref([]);
    const dtp = ref({});
    const errors = ref({});

    const getDtps = async () => {
        const response = await axios.get("dtps/");
        dtps.value = response.data.data;
    };
    const getDtp = async (id) => {
        const response = await axios.get("dtps/" + id);
        dtp.value = response.data.data;
    };
    const storeDtp = async (data) => {
        try {
            await axios.post("dtps/", data);
            errors.value = {};
            console.log("dtp stored");
            return;
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
                console.log("error detected");
            } else {
                console.error("An unexpected error occurred:", error);
            }
        }
    };
    const updateDtp = async (id, data) => {
        try {
            await axios.put("dtps/" + id, data);
        } catch (error) {
            if (error.response && error.response.status === 422) {
                errors.value = error.response.data.errors;
            } else {
                console.error("An unexpected error occurred:", error);
            }
        }
    };
    const destroyDtp = async (id) => {
        await axios.delete("dtps/" + id);
        await getDtps();
        await console.log(dtps);
    };
    return {
        dtp,
        dtps,
        getDtp,
        getDtps,
        storeDtp,
        updateDtp,
        destroyDtp,
        errors,
    };
}
