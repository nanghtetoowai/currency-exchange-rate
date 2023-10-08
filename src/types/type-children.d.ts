declare module 'type-children' {
	import React from 'react';

	interface IChildren {
		children:
			| React.ReactComponentElement<React>
			| Array<React.ReactComponentElement<React>>;
	}
}
