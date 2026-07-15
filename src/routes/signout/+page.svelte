<script lang="ts">
  import { SignOut } from "@auth/sveltekit/components"
</script>

<div class="relative flex h-full w-full overflow-hidden">
  <div
    class="z-20 flex h-dvh w-full items-center justify-center md:ml-[15%] md:w-[22rem]"
  >
    <div class="flex w-80 flex-col items-center justify-center text-xl">
      <h2
        class="mb-4 flex items-center space-x-2 text-3xl font-light text-slate-600"
      >
        <img src="/img/logo.png" alt="Company Logo" class="size-5" />
        <span class="text-4xl font-medium text-white">Company</span>
      </h2>
      <div
        class="m-8 flex w-full flex-col gap-2 rounded bg-white p-6 shadow-lg"
      >
        <SignOut signOutPage="signout" className="w-full">
          <div
            slot="submitButton"
            class="mt-2 flex h-12 w-full items-center space-x-2 rounded px-4 text-base font-light transition focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
          >
            <span class="flex w-full justify-center"> Signout </span>
          </div>
        </SignOut>
      </div>
    </div>
  </div>
</div>