function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    console.log(formProps);

    if (formProps.encrypt) {
        const encryptedMessage = btoa(JSON.stringify(formProps));
        console.log(encryptedMessage);

        window.open(`/VirtualCard?message=${encryptedMessage}&encrypt=true`);
    }
    else {
        e.target.submit();
    }
}