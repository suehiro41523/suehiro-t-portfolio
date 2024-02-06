import { ref } from "vue";
import axios from "axios";
import { apiURL } from "./config";

axios.defaults.baseURL = apiURL;
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post[
    ("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept")
];

export default function useImages() {
    const images = ref([]);
    const image = ref({});
    const errors = ref({});

    const getImages = async () => {
        const response = await axios.get("images/");
        images.value = response.data.data;
    };
    const getImage = async (id) => {
        const response = await axios.get("images/" + id);
        image.value = response.data.data;
    };
    const storeImage = async (data) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            const formData = new FormData();
            formData.append("image", data.value);
            formData.append("name", data.name);
            await axios.post("images/", formData, { config }); // S3にポスト
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
                console.log("error detected");
            } else {
                console.error("An unexpected error occurred:", error);
            }
        }
    };
    const updateImage = async (id) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            const formData = new FormData();
            formData.append("image", data.value);
            formData.append("name", data.name);
            await axios.post("images/", formData, { config }); // S3にポスト
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
                console.log("error detected");
            } else {
                console.error("An unexpected error occurred:", error);
            }
        }
        // try {
        //     await axios.put("images/" + id, image.value);
        // } catch (error) {
        //     if (error.response && error.response.status === 422) {
        //         errors.value = error.response.data.errors;
        //     } else {
        //         console.error("An unexpected error occurred:", error);
        //     }
        // }
    };
    const destroyImage = async (id) => {
        const getImageById = (id) => {
            return Images._value.find((Image) => Image.id == id);
        };

        if (
            !window.confirm(getImageById(id).name + " を本当に削除しますか？")
        ) {
            return;
        }
        await axios.delete("images/" + id);
    };
    return {
        image,
        images,
        getImage,
        getImages,
        storeImage,
        updateImage,
        destroyImage,
        errors,
    };
}
