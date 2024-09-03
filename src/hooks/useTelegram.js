const tg = window.Telegram.WebApp;

export function useTelegram() {

    const onclose = () => {
        tg.close();
    }

    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }else  {
            tg.MainButton.show();
        }
    }

    return {
        onToggleButton,
        onclose,
        tg,
        user: tg.initDataUnsafe.user,
    }
}