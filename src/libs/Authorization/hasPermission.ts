import { UserAccount } from "@/types/Auth";
import { Permission } from "@/types/Authorization/Permissions";
import { Role } from "@/types/Authorization/Roles";
import { UserAuthorization } from "./UserAuthorization";
import { AdminAuthorization } from "./AdminAuthoization";
import { SuperadminAuthorization } from "./SuperadminAuthoerization";

interface ActionedResources {}

export type RolePermissionAccess = {
	[perm in Permission]?: boolean | ((resources: ActionedResources) => boolean);
};

const NoAuthAccess: RolePermissionAccess = {
	// default is no access to anything due to NoAuth
};

type RoleAcessTable = {
	[role in Role]: RolePermissionAccess;
};

const roleAcessTable: RoleAcessTable = {
	User: UserAuthorization,
	Admin: AdminAuthorization,
	Superadmin: SuperadminAuthorization,
	NoAuth: NoAuthAccess,
};

export function hasPermission(
	user: UserAccount,
	perm: Permission,
	resources: ActionedResources
): boolean {
	const roles: Role[] = [user.role];

	let res = false;

	roles.forEach((role) => {
		// if no perm then access is false and thus no effect on res
		if (perm in roleAcessTable[role]) {
			const access = roleAcessTable[role][perm] || false;
			if (typeof access == "boolean") res ||= access;
			else res ||= access(resources);
		}
	});

	return res;
}
