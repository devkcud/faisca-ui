<svelte:head>
  <title>Fale Conosco - Faísca</title>
</svelte:head>

<div class="flex gap-4 max-md:flex-col">
  <section class="flex-1 space-y-4">
    <h2 class="text-4xl font-bold text-quaternary">Fale conosco</h2>

    <p class="opacity-80">
      Queremos ouvir você! Seja para dar um feedback, fazer uma pergunta ou simplesmente dizer um
      "olá", estamos aqui para ajudar. Preencha o formulário abaixo e entraremos em contato o mais
      rápido possível. Sua opinião é fundamental para nós.
    </p>

    <img src="/assets/sino.png" alt="" class="mx-auto max-md:hidden" />
  </section>

  <form class="flex flex-1 flex-col gap-4 rounded-xl bg-accent px-4 py-8">
    <label class="form-control w-full">
      <div class="label pb-0">
        <span class="label-text font-bold">Nome</span>
      </div>

      <input type="text" name="name" placeholder="Digite seu nome completo" class="input w-full" />
    </label>

    <label class="form-control w-full">
      <div class="label pb-0">
        <span class="label-text font-bold">E-mail</span>
      </div>

      <input type="text" name="name" placeholder="Digite seu e-mail" class="input w-full" />
    </label>

    <label class="form-control w-full">
      <div class="label pb-0">
        <span class="label-text font-bold">Assunto</span>
      </div>

      <input type="text" name="name" placeholder="Digite o assunto" class="input w-full" />
    </label>

    <label class="form-control flex-1">
      <div class="label pb-0">
        <span class="label-text font-bold">Mensagem</span>
      </div>

      <textarea
        placeholder="Digite sua mensagem"
        class="textarea h-full resize-none overflow-y-auto"
        required
      />
    </label>

    <button class="btn btn-primary ml-auto w-fit">Enviar</button>
  </form>
</div>
