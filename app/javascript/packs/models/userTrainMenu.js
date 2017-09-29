import _ from "lodash";

const invalidArguments = args => {
  const id = _.get(args, "id", null);
  const trains = _.get(args, "trains", null);
  const menu = _.get(args, "menu", null);
  const todayMenu = _.get(args, 'today_menu', null);
  return _.isNil(id) || _.isNil(trains) || _.isNil(menu) || _.isNil(todayMenu);
};

export default class UserTrainMenu {
  constructor(args) {
    if (invalidArguments(args)) return null;
    this._id = args.id;
    this._trains = args.trains;
    this._menu = args.menu;
    this._todayMenu = args.today_menu;
  }

  get id() {
    return this._id;
  }

  get trains() {
    return this._trains;
  }

  get menu() {
    return this._menu;
  }

  get todayMenu() {
    return this._todayMenu;
  }
}
