import { MenuList } from "./component";

export const MenuListContainer = ({menuIds}) => {
    if (!menuIds.length) {
        return null;
    }

    return (
        <MenuList menuIds={menuIds} />
    )
}