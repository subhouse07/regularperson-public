<script setup>
import validator from "validator";
import AnimatedButton from "./AnimatedButton.vue";
import ImageCard from "./ImageCard.vue";
import { functions } from "../firebase";
import { ref } from "vue";
import { mdiEmail, mdiCheckOutline, mdiEmoticonDeadOutline } from "@mdi/js";
import { httpsCallable } from "firebase/functions";

const Status = Object.freeze({
  ERROR: -1,
  NONE: 0,
  SENDING: 1,
  SUCCESS: 2,
});

const email = ref("");
const message = ref("");
const validEmail = ref(true);
const sentStatus = ref(Status.NONE);

const rules = {
  required: (value) => !!value || "Field is required",
  email: () => validEmail.value || "Invalid email",
};

const validate = () => (validEmail.value = validator.isEmail(email.value));

const sendMessage = () => {
  if (validator.isEmail(email.value) && message.value.trim() !== "") {
    sentStatus.value = Status.SENDING;

    // Call firebase function
    const sendMessage = httpsCallable(functions, "sendMessage");
    sendMessage({
      from: email.value,
      message: message.value,
    })
      .then((result) => {
        console.log(result.data);
        const data = result.data;
        if (data.error) {
          sentStatus.value = Status.ERROR;
          console.error(data.error);
        } else {
          sentStatus.value = Status.SUCCESS;
        }
      })
      .catch((error) => {
        sentStatus.value = Status.ERROR;
        console.error(error);
      });
  }
};
</script>
<template>
  <div>
    <ImageCard :style="{ minHeight: '420px' }" :title="'Contact Me'"
      :text="'Thanks for visiting. Please fill out the form below if you have any questions, requests, comments, or ideas. I\'ll get back to you as soon as I can.'">
      <div v-if="sentStatus === Status.NONE">
        <v-text-field label="Email" :rules="[rules.required, rules.email]" v-model="email" v-on:blur="validate">
          <template v-slot:prepend-inner>
            <v-btn variant="plain" density="compact" icon>
              <v-icon :icon="mdiEmail" />
            </v-btn>
          </template>
        </v-text-field>
        <v-textarea placeholder="Type your message here." :rules="[rules.required]" v-model="message" />
      </div>
      <div class="status" v-if="sentStatus === Status.SUCCESS">
        <v-icon :icon="mdiCheckOutline" color="success" size="x-large" />
        <h3 class="status text">
          Thanks for contacting me. I look forward to reading your message.
        </h3>
      </div>
      <div class="status" v-if="sentStatus === Status.SENDING">
        <v-progress-circular indeterminate :size="64">
          <v-icon :icon="mdiEmail" />
        </v-progress-circular>
        <h3 class="status text">Sending...</h3>
      </div>
      <div class="status" v-if="sentStatus === Status.ERROR">
        <v-icon :icon="mdiEmoticonDeadOutline" color="error" size="x-large" />
        <h3 class="status text">
          Something went wrong. You may have to try again or find another way to
          contact me. Sorry, I would rather it not have happened this way.
        </h3>
      </div>
    </ImageCard>
    <AnimatedButton v-if="sentStatus === Status.NONE" :text="'Submit'" @clicked="sendMessage" />
  </div>
</template>

<style scoped>
.status {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 24px 0;
}

.status.text {
  margin-top: 16px;
}
</style>
