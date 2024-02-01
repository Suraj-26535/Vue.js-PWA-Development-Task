<template>
    <div class="form-container" :style="{ backgroundColor: formData.background_color }">
        <form @submit.prevent="submitForm" :style="{ color: formData.form_background_color }">
            <h1 style="color:black">{{ formData.form_name }}</h1>
            <img src="../assets/download.jpg" alt="Form Banner" style="width:700px"/>

            <div v-for="attribute in formData.attributes" :key="attribute.id">
                <label :style="{ color: formData.attribute_label_color }">{{ $t(attribute.name) }}</label>
                <input v-if="attribute.type === 'text'" type="text" :placeholder="$t(attribute.placeholder)" required v-model="formValues[attribute.code]" />
                <select v-if="attribute.type === 'select'" v-model="formValues[attribute.code]" required>
                    <option v-for="option in attribute.options" :key="option.id">{{ $t(option.name) }}</option>
                </select>
                <input v-if="attribute.type === 'date'" type="date" :placeholder="$t(attribute.placeholder)" @input="updateDate($event.target.value)" v-model="formValues[attribute.code]" required />
                <input v-if="attribute.type === 'file'" type="file" :style="{ color: formData.attribute_label_color }" @change="handleFileChange"  required/>
            </div>
            <button type="submit" :style="{ backgroundColor: formData.form_submit_button_color }">
                {{ $t(formData.submit_button_label) }}
            </button>
        </form>
        <div v-if="showSuccessMessage">
            <p>{{ $t(formData.submit_success_content) }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['formData'],
    data() {
        return {
      formValues: {}, // Hold the form field values
      showSuccessMessage: false,
        };
    },
    methods: {
        submitForm() {
            this.showSuccessMessage = true;
            localStorage.setItem('sucess', JSON.stringify(this.formValues))
            console.log('sucess', this.formValues)
            
        },
        handleFileChange(event) {
            const file = event.target.files[0];
            this.$emit('input', file);
        },
        updateDate(value) {
            this.$emit('input', value);
        },
    
    },
    
};
</script>

<style scoped>
.form-container {
    padding: 20px;
    margin: auto;
    max-width: 600px;
}

label {
    display: block;
    margin-bottom: 5px;
}

img {
    max-width: 100%;
    margin-bottom: 10px;
}

input,
select,
button {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

button {
    color: white;
    cursor: pointer;
}
</style>
