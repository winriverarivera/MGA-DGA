import { NgModule } from '@angular/core';

// Pipes
import { ImagenPipe } from './imagen.pipe';
import { FiltroFechaPipe } from './filtro-fecha.pipe';

@NgModule({
  declarations: [ ImagenPipe, FiltroFechaPipe ],
  exports: [ ImagenPipe, FiltroFechaPipe ],
})
export class PipesModule { }
