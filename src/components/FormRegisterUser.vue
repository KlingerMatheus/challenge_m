<template>
  <form action="" id="form-register-user">
    <fieldset class="form-group">
      <legend>Personal Info</legend>
      <div class="row">
        <div class="input-group">
          <label for="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Type here..."
            autocomplete="off"
            class="input-text"
          />
        </div>
        <div class="input-group">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Type here..."
            autocomplete="off"
            class="input-text"
          />
        </div>
      </div>
    </fieldset>
    <fieldset class="form-group">
      <legend>Address</legend>
      <div class="row">
        <div class="input-group">
          <label for="cep">ZIP Code</label>
          <input
            type="text"
            name="cep"
            placeholder="Type here..."
            autocomplete="off"
            class="input-text"
          />
          <small
            >Type you ZIP Code and it will fill automatically the other
            fields.</small
          >
        </div>
      </div>
      <div class="row">
        <div class="input-group">
          <label for="logradouro">Logradouro</label>
          <input
            type="text"
            name="logradouro"
            placeholder="Type here..."
            autocomplete="off"
            class="input-text"
            disabled
          />
        </div>
        <div class="input-group">
          <label for="numero">Numero</label>
          <input
            type="number"
            name="numero"
            placeholder="Type here..."
            autocomplete="off"
            class="input-text"
            disabled
          />
        </div>
        <div class="input-group">
          <label for="bairro">Bairro</label>
          <input
            type="text"
            name="bairro"
            placeholder="Type here..."
            autocomplete="off"
            class="input-text"
            disabled
          />
        </div>
      </div>
      <div class="row">
        <div class="input-group">
          <label for="cidade">Cidade</label>
          <input
            type="text"
            name="cidade"
            placeholder="Type here..."
            autocomplete="off"
            class="input-text"
            disabled
          />
        </div>
        <div class="input-group">
          <label for="estado">Estado</label>
          <input
            type="text"
            name="estado"
            placeholder="Type here..."
            autocomplete="off"
            class="input-text"
            disabled
          />
        </div>
      </div>
      <div class="row">
        <div class="input-group">
          <label for="complemento">Complemento</label>
          <input
            type="text"
            name="complemento"
            placeholder="Type here..."
            autocomplete="off"
            class="input-text"
            disabled
          />
        </div>
      </div>
      <div class="row btn-group">
        <button class="btn btn-primary">Save</button>
        <button class="btn btn-danger">Reset</button>
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "FormRegisterUser",
};
</script>

<style scoped>
#form-register-user {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
