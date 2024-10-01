<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Input from "../ui/input/Input.vue";

const { loading, open } = useHelpers();
const createNewProduct = async () => {
  try {
    loading.value = true;
  } catch (error) {
  } finally {
    loading.value = true;
    open.value = false;
  }
};
</script>

<template>
  <AlertDialog :open="open">
    <AlertDialogTrigger>
      <Button @click="open = true" class="w-full">Add new product</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle> Create a new product </AlertDialogTitle>
        <Input placeholder="product name" />
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel @click="open = false">Cancel</AlertDialogCancel>
        <AlertDialogAction @click="createNewProduct">Create</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
