import { Button } from '@/components/ui/button';

function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Календарь звонков</h1>
      <p className="text-muted-foreground">Сервис бронирования звонков</p>
      <Button>Забронировать звонок</Button>
    </main>
  );
}

export default App;
