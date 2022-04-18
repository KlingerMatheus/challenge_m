<template>
  <div class="list-container">
    <ModalDetailsUser
      v-show="modalIsOpen"
      @emitCloseModal="closeModal"
      :user="selectedUser"
    />
    <table>
      <LoadingEffect v-show="loaderCycle" />
      <thead>
        <tr>
          <td>#</td>
          <td class="text-align-left">Name</td>
          <td class="noneAsResponsive">Location</td>
          <td>#</td>
        </tr>
      </thead>
      <tbody>
        <tr class="user-row" v-for="(user, index) in users" :key="index">
          <td>
            {{ index + 1 }}
          </td>
          <td class="text-align-left">
            {{ user.first_name }} {{ user.last_name }}
          </td>
          <td class="noneAsResponsive">{{ user.city }} - {{ user.state }}</td>
          <td>
            <button
              class="btn-details"
              @click="setUserDataToDetailsModal(user.id)"
            >
              <i class="fa fa-plus"></i> Details
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <tr v-if="users.length === 0" class="no-users-message">
      <td>There is no users registered...</td>
    </tr>
    <tr v-else-if="users.length === undefined" class="no-users-message">
      <td>There is an error, contact the support :)</td>
    </tr>
  </div>
</template>
<script>
import { http } from "../api/config";
import LoadingEffect from "./LoadingEffect.vue";
import ModalDetailsUser from "./ModalDetailsUser.vue";

export default {
  name: "ListViewUser",
  components: { LoadingEffect, ModalDetailsUser },
  data: () => {
    return {
      selectedUser: {},
      users: {},
      loaderCycle: true,
      modalIsOpen: false,
    };
  },
  mounted() {
    return this.getUsers();
  },
  methods: {
    setUserDataToDetailsModal(id) {
      this.selectedUser = this.getSpecificUser(id);
      return (this.modalIsOpen = true);
    },
    closeModal() {
      return (this.modalIsOpen = false);
    },
    async getSpecificUser(userIndex) {
      return await http
        .get(`user/${userIndex}`)
        .then((fetchUser) => {
          return (this.selectedUser = fetchUser.data);
        })
        .catch((err) => {
          return console.log(err);
        });
    },
    async getUsers() {
      return await http
        .get("users")
        .then((fetchUsers) => {
          this.loaderCycle = false;
          return (this.users = fetchUsers.data);
        })
        .catch((err) => {
          this.loaderCycle = false;
          return console.log(err);
        });
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

table thead {
  background-color: rgb(0, 160, 255);
  font-weight: bolder;
  text-transform: capitalize;
}

table thead td {
  font-size: 22px;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
}

table tbody td {
  font-weight: 500;
}

table tbody {
  background-color: rgba(255, 255, 255, 0.1);
}

table tbody tr:nth-child(even) {
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.015),
    rgba(0, 0, 0, 0.075)
  );
}

tr {
  transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

table tbody tr:hover {
  background-color: rgba(0, 160, 255, 1);
  cursor: pointer;
}

table td {
  text-align: center;
  padding: 12px 14px;
}

.no-users-message {
  display: flex;
  justify-content: center;
  padding-block: 26px;
  font-weight: bolder;
  font-size: 28px;
  text-align: center;
}

.btn-details {
  background-color: rgba(255, 255, 255, 0.08);
  color: #fff;
  padding: 12px 16px;
  border-radius: 100px;
  cursor: pointer;
  font-weight: bolder;
  transition: ease 250ms;
}

.btn-details:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 160, 255);
  transform: scale(1.1);
}

.text-align-left {
  text-align: left;
}

@media screen and (max-width: 590px) {
  .noneAsResponsive {
    display: none;
  }
}
</style>
