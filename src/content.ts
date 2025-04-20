import {MiniGamepad, Mode} from '@vdegenne/mini-gamepad';

const minigp = new MiniGamepad();

minigp.onConnect((gamepad) => {
	const {RIGHT_BUTTONS_TOP} = gamepad.mapping;

	gamepad.before(RIGHT_BUTTONS_TOP, ({mode}) => {
		if (mode === Mode.NORMAL) {
			window.close();
		}
	});
});
