import JSONModel from "sap/ui/model/json/JSONModel";
import Icon from "sap/ui/core/Icon";
import Table from "sap/m/Table";
import Column from "sap/m/Column";
import ColumnListItem from "sap/m/ColumnListItem";
import Label from "sap/m/Label";
import Text from "sap/m/Text";
import Title from "sap/m/Title";

const showPack = async (iconPack: string) => {
	const url = sap.ui.require.toUrl(
		"fontawesome/icons/lib/fonts/" + iconPack + "/" + iconPack + ".json"
	);
	const model = new JSONModel();

	await model.loadData(url);
	const icons = model.getData() as Record<string, { key: string }>[];

	new Title({ text: iconPack }).placeAt("content");

	const table = new Table({
		columns: [
			new Column({
				header: new Label({ text: "Icon" }),
				width: "50px",
			}),
			new Column({
				header: new Label({ text: "Name" }),
			}),
			new Column({
				header: new Label({ text: "Icon Path" }),
			}),
		],
	});

	for (const key of Object.keys(icons)) {
		const src = "sap-icon://" + iconPack + "/" + key;
		const iconControl = new Icon({
			src: src,
			size: "2rem",
		});
		const listItem = new ColumnListItem({
			cells: [iconControl, new Text({ text: key }), new Text({ text: src })],
		});
		table.addItem(listItem);
	}

	table.placeAt("content");
};

const init = async () => {
	await showPack("fa-regular");
	await showPack("fa-solid");
	await showPack("fa-brands");
};

void init();
