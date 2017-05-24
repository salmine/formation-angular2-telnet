import { TestBed, inject } from '@angular/core/testing';

import { FormationService } from './formation.service';
import { HttpModule, BaseRequestOptions, Http, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { async } from "@angular/core/testing";

describe('FormationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule],
      providers: [FormationService, MockBackend, BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]

        }
      ]
    });
  });

it('should construct', async(inject(
    [FormationService, MockBackend], (service, mockBackend) => {
      expect(service).toBeDefined();
    })));

  it('should be created', inject([FormationService], (service: FormationService) => {
    expect(service).toBeTruthy();
  }));

  describe('fetch', () => {
    const mockResponse = [{
      title: 'title1',
      description: 'description'
    }];

    it('should parse response', async(inject(
      [FormationService, MockBackend], (service, mockBackend) => {

        mockBackend.connections.subscribe(conn => {
          conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockResponse) })));
        });

        const result = service.fetch();

        result.subscribe(res => {
          expect(res).toEqual([{
            title: 'title',
            description: 'description'
          }]);
        });
      })));
  });



});
