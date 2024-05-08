import { User } from './App';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
type UserListProps = {
    users: User[];
    searchTerm: string;
  };

function UserList({ users,searchTerm }: UserListProps) {

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.address.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.address.street.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.address.suite.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.address.zipcode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.website.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.company.catchPhrase.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.company.bs.toLowerCase().includes(searchTerm.toLowerCase())
    );
return (
    <div className="grid grid-cols-4 gap-8 ">
        {filteredUsers.length === 0 ? (
            <p className="text-red-500 font-bold">Aucun résultat</p>
        ) : (
            filteredUsers.map((user) => (
                <Card key={user.id}>
                    <CardHeader>
                        <CardTitle>{user.name}</CardTitle>
                        <CardDescription>{user.email}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{user.phone}</p>
                        <p>{user.website}</p>
                    </CardContent>
                    <CardFooter>
                        <Button>View Profile</Button>
                    </CardFooter>
                </Card>
            ))
        )}
    </div>
);
}

export default UserList