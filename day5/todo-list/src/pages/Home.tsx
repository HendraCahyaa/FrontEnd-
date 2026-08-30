import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Home() {
  interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
    setOpen(false);
  };
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <Navbar />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          className={
            "border-2 border-gray-200 rounded-xl p-2 m-4 block ml-auto"
          }
        >
          Add New Todo
        </DialogTrigger>
        <DialogContent>
          <form onSubmit={addTodo}>
            <DialogHeader>
              <DialogTitle>Add New TODO</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="name-1">TODO</Label>
                <Input
                  type="text"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  value={input}
                />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button variant="outline">Cancel</Button>} />
              <Button type="submit" onSubmit={addTodo}>
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-200">Done</TableHead>
            <TableHead className="w-200">ToDo</TableHead>
            <TableHead className="w-200">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} className="text-center py-4">
                Belum ada todo.
              </TableCell>
            </TableRow>
          ) : (
            todos.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell className="w-200">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                </TableCell>

                <TableCell
                  className={
                    todo.completed
                      ? "line-through text-gray-600"
                      : "text-black font-medium"
                  }
                >
                  {todo.text}
                </TableCell>

                <TableCell className="text-center">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteTodo(todo.id)}
                    className={"block mr-auto"}
                  >
                    Hapus
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
export default Home;
