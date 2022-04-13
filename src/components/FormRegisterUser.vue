<template>
  <form action="#" id="form-register-user">
    <Notification
      v-if="notification.show"
      :title="notification.title"
      :message="notification.message"
      :style-box="notification.style"
    />
    <LoadingEffect v-show="loaderCycle" />
    <fieldset class="form-group">
      <legend>Personal Info</legend>
      <div class="row">
        <div class="input-group">
          <label for="firstName">First Name</label>
          <input
            type="text"
            placeholder="Type here..."
            autocomplete="off"
            class="input-text"
            v-model="userData.personalInfo.firstName"
          />
        </div>
        <div class="input-group">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            placeholder="Type here..."
            autocomplete="off"
            class="input-text"
            v-model="userData.personalInfo.lastName"
          />
        </div>
      </div>
    </fieldset>
    <fieldset class="form-group">
      <legend>Address</legend>
      <div class="row">
        <div class="input-group input-group-address">
          <label for="zip">ZIP Code</label>
          <input
            type="text"
            id="zip"
            maxlength="8"
            autocomplete="off"
            placeholder="Type here..."
            class="input-text"
            v-model="userData.address.zip"
          />
          <small>
            Tip: Only numbers. <br />
            Type you ZIP Code and it will fill automatically the other
            fields.</small
          >
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-search btn-primary"
              @click="fillFormAddress()"
            >
              <i class="btn-icon fas fa-search"></i>Search
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="input-group">
          <label for="street">Street</label>
          <input
            type="text"
            placeholder="Type here..."
            autocomplete="off"
            class="input-text"
            maxlength="50"
            id="street"
            v-model="userData.address.street"
            disabled
          />
        </div>
        <div class="input-group">
          <label for="number">Number</label>
          <input
            type="text"
            placeholder="Type here..."
            maxlength="6"
            autocomplete="off"
            class="input-text"
            id="number"
            v-model="userData.address.number"
            disabled
          />
        </div>
        <div class="input-group">
          <label for="neighborhood">Neighborhood</label>
          <input
            type="text"
            placeholder="Type here..."
            autocomplete="off"
            class="input-text"
            maxlength="50"
            id="neighborhood"
            v-model="userData.address.neighborhood"
            disabled
          />
        </div>
      </div>
      <div class="row">
        <div class="input-group">
          <label for="city">City</label>
          <input
            type="text"
            placeholder="Type here..."
            autocomplete="off"
            class="input-text"
            id="city"
            v-model="userData.address.city"
            disabled
          />
        </div>
        <div class="input-group">
          <label for="state">State</label>
          <input
            type="text"
            placeholder="Type here..."
            autocomplete="off"
            class="input-text"
            id="state"
            v-model="userData.address.state"
            disabled
          />
        </div>
      </div>
      <div class="row">
        <div class="input-group">
          <label for="complement">Complement</label>
          <input
            type="text"
            placeholder="Type here..."
            autocomplete="off"
            class="input-text"
            maxlength="50"
            id="complement"
            v-model="userData.address.complement"
            disabled
          />
        </div>
      </div>
      <div class="row btn-group">
        <button type="button" @click="registerUser()" class="btn btn-primary">
          <i class="btn-icon fas fa-check"></i>
          <p>Register</p>
        </button>
        <button type="button" @click="resetForm()" class="btn btn-danger">
          <i class="btn-icon fas fa-eraser"></i>
          <p>Reset</p>
        </button>
      </div>
    </fieldset>
  </form>
</template>

<script>
import { http } from "../api/config";
import LoadingEffect from "./LoadingEffect.vue";
import formValidator from "../resources/formValidations";
import Notification from "./Notification.vue";

export default {
  name: "FormRegisterUser",
  components: {
    LoadingEffect,
    Notification,
  },
  data: () => {
    return {
      loaderCycle: false,
      notification: {
        title: "",
        message: "",
        show: false,
        style: "",
      },
      userData: {
        personalInfo: {
          firstName: "",
          lastName: "",
        },
        address: {
          zip: "",
          street: "",
          number: "",
          neighborhood: "",
          city: "",
          state: "",
          complement: "",
        },
      },
    };
  },
  methods: {
    setNotification(title, message, style) {
      this.notification.title = title;
      this.notification.style = style;
      this.notification.message = message;

      this.notification.show = true;
      setTimeout(() => {
        this.notification.show = false;
      }, 5000);
    },
    async fetchAddressAPI() {
      const ADDRESS = await fetch(
        `https://viacep.com.br/ws/${this.userData.address.zip}/json/`,
        {
          method: "GET",
        }
      )
        .then((response) => {
          return response.json();
        })
        .catch((error) => {
          return console.log(error);
        });

      return ADDRESS;
    },
    async fillFormAddress() {
      this.loaderCycle = true;
      if (
        this.userData.address.zip.length == 8 &&
        formValidator.isZipValid(this.userData.address.zip)
      ) {
        const ADDRESS = await this.fetchAddressAPI();

        if (ADDRESS.erro) {
          this.setNotification(
            "Alert",
            "This ZIP Code doesn't exist.",
            "warning"
          );
          this.userData.address.zip = "";
        } else {
          this.userData.address.street = ADDRESS.logradouro;
          this.userData.address.neighborhood = ADDRESS.bairro;
          this.userData.address.city = ADDRESS.localidade;
          this.userData.address.state = ADDRESS.uf;
          this.userData.address.complement = ADDRESS.complemento;

          this.enableEmptyAddressInputs(ADDRESS);
          document.querySelector("#number").disabled = false;
        }
      } else {
        this.loaderCycle = false;
        return this.setNotification(
          "Alert",
          "ZIP Code must have exact 8 NUMBERS!",
          "warning"
        );
      }
      this.loaderCycle = false;
    },
    enableEmptyAddressInputs(ADDRESS) {
      ADDRESS.logradouro === ""
        ? (document.querySelector("#street").disabled = false)
        : (document.querySelector("#street").disabled = true);

      ADDRESS.bairro === ""
        ? (document.querySelector("#neighborhood").disabled = false)
        : (document.querySelector("#neighborhood").disabled = true);

      ADDRESS.complemento === ""
        ? (document.querySelector("#complement").disabled = false)
        : (document.querySelector("#complement").disabled = true);
    },
    disableAddressInputs() {
      document.querySelector("#street").disabled = true;
      document.querySelector("#neighborhood").disabled = true;
      document.querySelector("#complement").disabled = true;
    },
    registerUser() {
      return this.formValidation()
        ? alert("Error! Check if you filled the form correctly.")
        : this.insertUser();
    },
    async insertUser() {
      this.loaderCycle = true;

      return await http
        .post("register", this.userData)
        .then((response) => {
          this.resetForm();
          this.disableAddressInputs();
          this.loaderCycle = false;

          if (response.data.status === "SUCCESS") {
            return "success";
          } else if (response.data.status === "ERROR") {
            return "error";
          }
        })
        .then((result) => {
          switch (result) {
            case "success": {
              this.setNotification(
                "Success!",
                "User registered succesfully.",
                "success"
              );
              break;
            }
            case "error": {
              this.setNotification(
                "Failed!",
                "Failure on registering user.",
                "danger"
              );
              break;
            }
          }
        })
        .catch((error) => {
          alert("Occured an error! Contact the support.");
          this.loaderCycle = false;
          console.log(error);
        });
    },
    formValidation() {
      const PERSONAL_INFO = this.userData.personalInfo;

      if (formValidator.someFieldIsEmpty(this.userData)) return true;
      if (
        formValidator.stringContainsNumber(
          PERSONAL_INFO.firstName.concat(PERSONAL_INFO.lastName)
        )
      )
        return true;

      return false;
    },
    resetForm() {
      this.userData.personalInfo.firstName = "";
      this.userData.personalInfo.lastName = "";
      this.userData.address.zip = "";
      this.userData.address.street = "";
      this.userData.address.number = "";
      this.userData.address.neighborhood = "";
      this.userData.address.city = "";
      this.userData.address.state = "";
      this.userData.address.complement = "";
    },
  },
};
</script>

<style scoped>
#form-register-user {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.row {
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.input-group {
  margin-inline: 12px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 16px;
}

input {
  margin-top: 6px;
  padding: 12px;
  font-size: 18px;
  border-radius: 4px;
  outline: none;
  transition: all 150ms;
}

input:focus {
  outline: 3px solid rgba(0, 160, 255, 0.8);
}

input[type="number"],
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none;
}

.form-group {
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.form-group legend {
  font-size: 24px;
  background-color: rgb(0, 160, 255);
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  padding: 12px 36px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

.btn-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  position: relative;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  margin: 14px;
  padding-block: 18px;
  max-width: 240px;
  border-radius: 100px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.75);
  font-weight: 500;
  transition: all 150ms;
  outline: 0px solid;
  cursor: pointer;
  min-width: 200px;
}

.btn .btn-icon {
  margin-right: 5%;
}

.btn-primary {
  background-color: rgb(0, 160, 255);
  outline-color: rgb(0, 160, 255);
}

.btn-danger {
  background-color: rgb(255, 40, 0);
  outline-color: rgb(255, 40, 0);
}

.btn:hover {
  background-color: transparent;
  color: rgba(255, 255, 255, 0.9);
  outline-width: 3px;
}
</style>
