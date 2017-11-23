// Global state (used for theming)
import { AppState } from './app.global';
import { Localstorage } from '../providers/localstorage';

// Providers
import { ToastService } from '../providers/util/toast.service';
import { AlertService } from '../providers/util/alert.service';
import { CameraProvider } from '../providers/util/camera.provider';
import { NativeGoogleMapsProvider } from '../providers/native-google-maps/native-google-maps';

// Ionic native providers
import { CardIO } from '@ionic-native/card-io';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';

// Directives
import { SlidingDrawer } from '../components/sliding-drawer/sliding-drawer';
import { Autosize } from '../components/autosize/autosize';

// Components
import { Timer } from '../components/countdown-timer/timer';
import { TimerProgress } from '../components/timer-progress/timer-progress';
import { ExpandableHeader } from '../components/expandable-header/expandable-header';
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { AccordionListComponent } from '../components/accordion-list/accordion-list';
import { TimelineComponent } from '../components/timeline/timeline';
// tslint:disable-next-line:no-duplicate-imports
import { TimelineItemComponent } from '../components/timeline/timeline';
// tslint:disable-next-line:no-duplicate-imports
import { TimelineTimeComponent } from '../components/timeline/timeline';

// Pipes
import { MomentPipe } from '../pipes/moment.pipe';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { OrderByPipe } from '../pipes/orderby.pipe';
import { ShortenStringPipe } from '../pipes/shorten.pipe';
import { CapitalizePipe } from '../pipes/capitalize.pipe';

// Modules
import { SwingModule } from 'angular2-swing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Base64 } from '@ionic-native/base64';
import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';

export const MODULES = [
  SwingModule,
  BrowserModule,
  HttpModule,
];

export const PIPES = [
  TemperaturePipe,
  MomentPipe,
  OrderByPipe,
  CapitalizePipe,
  ShortenStringPipe
];

export const PROVIDERS = [
  AlertService,
  ToastService,
  AppState,
  CameraProvider,
  NativeGoogleMapsProvider,

  // Ionic native specific providers
  BarcodeScanner,
  Camera,
  Diagnostic,
  Geolocation,
  CardIO,
  StatusBar,
  SplashScreen,
  GoogleMaps,
  Localstorage,
  Storage,
  Base64,
  ImageResizer
];

export const COMPONENTS = [
  FlashCardComponent,
  TimerProgress,
  Timer,
  ExpandableHeader,
  Autosize,
  AccordionListComponent,
  TimelineComponent,
  TimelineItemComponent,
  TimelineTimeComponent
];

export const DIRECTIVES = [
  SlidingDrawer,
  Timer,
  Autosize,
];
