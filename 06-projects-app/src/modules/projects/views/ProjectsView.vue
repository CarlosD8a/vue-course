<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 2 -->
        <tr class="hover:bg-base-300">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
      </tbody>
    </table>

    <input-modal
      :open="openModal"
      @close="openModal = false"
      @value="onNewProyect"
      placeholder="Ingrese el nombre del proyecto"
      titulo="Proyecto"
      subtitulo="Crea un nuevo proyecto"
    />

    <custom-modal :open-var="openCustomModal">
      <template #header>
        <h1 class="text-3xl">Titulo del modal</h1>
      </template>

      <template #body>
        <p>Titulo del modal</p>
      </template>

      <template #actions>
        <div class="flex justify-end mt-2">
          <button @click="openCustomModal = false" type="button" class="btn mr-4">Close</button>
          <button @click="openCustomModal = false" type="submit" class="btn btn-primary">
            Aceptar
          </button>
        </div>
      </template>
    </custom-modal>

    <fab-button position="bottom-right" @click="openModal = true">
      <add-circle />
    </fab-button>

    <fab-button position="bottom-left" @click="openCustomModal = true">
      <custom-icon />
    </fab-button>
  </div>
</template>

<script setup lang="ts">
import CustomModal from '@/modules/common/components/CustomModal.vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import CustomIcon from '@/modules/common/icons/customIcon.vue';
import { ref } from 'vue';
import { useProjecsStore } from '../stores/projectes.store';

const openModal = ref(false);
const openCustomModal = ref(false);

const projectsStore = useProjecsStore();

const onNewProyect = (projectName: string) => {
  console.log({ projectName });
};
</script>
