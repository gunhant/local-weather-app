import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { WeatherServiceFake } from './weather.service.fake';

describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

});
