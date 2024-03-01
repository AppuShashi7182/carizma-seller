import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { IVechileData, IVechileModelDetails } from 'src/app/models/IVechile';
import { CommondataSellService } from 'src/app/services/commondata-sell.service';
import { NHTSAService } from 'src/app/services/nhtsa-service';
import { IVechileConditionQuestionaire, IVechileDetailQuestionaire } from '../questionsJson';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SellCarStoreService } from 'src/app/services/SellCarStore.Service';
import { ISellerVechileDetails } from 'src/app/models/ISellerVechileDetails';
import { ReviewService } from 'src/app/services/review.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-vechile-details',
  templateUrl: './vechile-details.component.html',
  styleUrls: ['./vechile-details.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VechileDetailsComponent {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  sixthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  seventhFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  eighthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  ninthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  tenthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  eleventhFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  twelthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirteenFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
 fourteenFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  fifteenFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  sixteenFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  seventeenFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  eighteenFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });  
  nineteenFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
 tewntyFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  twentyOneFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  twentyTwoFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  twentyThreeGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  tenwetyFourFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  severityBodyDamageOptions = [{
    id: 1,
    value : 'Light',
    img: '../../../assets/images/light_body_damage.png'
  },{
    id: 2,
    value : 'Moderate',
    img: '../../../assets/images/moderate_body_damage.png'
  },{
    id: 3,
    value : 'Severe',
    img: '../../../assets/images/severe_body_damage.png'
  }]

  EngineRepairOptions: string[] = ['Engine repairs', "I don't know"];
  carEngineTransmissionOptions: string[] = [
    'Engine is partly taken apart.',
    'Engine or Transmission is removed but still available.',
    'Engine or Tranmission is no longer available',
  ];
  BodyDamageOptions: string[] = ['No Damage', 'Some damage', 'Crashed'];
  BodyDamageDentScratchOptions: string[] = [
    'Less than 3',
    '4 to 6 ',
    '7 and more',
  ];

  BodyNoticableDentsScratcheOptions = ['Less than 3', '4 to 6', '7 and more'];

  private onDestroy$: Subject<void> = new Subject<void>();
  // sellerDetails: ISellerVechileDetails;
  public vechileQuestionaire: IVechileDetailQuestionaire;

  selectVechileDetails?: IVechileModelDetails;
  @Input() formData: FormData[] | undefined;
  @Output() stepOneValidated = new EventEmitter<boolean>();
  @Output() getPageNumber = new EventEmitter<any>();
  selectedMake?: string = '';
  public vechileCondition: IVechileConditionQuestionaire;

  submitted: boolean | undefined;
  pageData=0;
  carTransmissionTypes = ['Manual', 'Automatic', 'Others'];
  CarTitleOptions: string[] = ['Clean', 'Salvage/Rebuilt', 'Junk', 'No Title'];
  CarOwnershipOptions: string[] = ['Yes', 'No']; //['Own', 'Lease', 'Re-finance'];
  CarColorOptions: string[] = [
    'Black',
    'White',
    'Grey',
    'Silver',
    'Blue',
    'Red',
    'Gold',
    'Green',
    'Yellow',
    'other',
  ];
  vehicleDetailsFormGroup: FormGroup;
  constructor(
    public _nhtsaervice: NHTSAService,
    public _store: SellCarStoreService,
    public reviewService: ReviewService,
    private _formBuilder: FormBuilder
  ) {
    this.vechileQuestionaire = this._store.sellerCompleteDetails.vehicleDetails;
    this.selectVechileDetails = this._store.sellerCompleteDetails.carDetails;
    this.selectedMake = this._store.sellerCompleteDetails.carDetails?.make;
    this.vechileCondition = this._store.sellerCompleteDetails.vehicleCondition;
    this.vehicleDetailsFormGroup = new FormGroup({
      carTitle: new FormControl(null, Validators.required),
      carLoan: new FormControl(null,Validators.required),
      loanAmount: new FormControl(''),
      mileage: new FormControl(null, [Validators.required, Validators.max(400000)]),
      color: new FormControl(null, Validators.required),
      zipCode: new FormControl(null, [Validators.required, Validators.pattern(/(^\d{5}$)|(^\d{5}-\d{4}$)/)]),
      vechileTransmissionType: new FormControl(null, Validators.required),
      doesCarDrive: new FormControl(this.vechileCondition.doesCarDrive, Validators.required),
      doesCarStart: new FormControl(this.vechileCondition.doesCarStart, Validators.required),
      carEngineandTransmission: new FormControl(this.vechileCondition.carEngineandTransmission, Validators.required),
      doesCarHaveMechanicalIssues: new FormControl(this.vechileCondition.doesCarHaveMechanicalIssues, [Validators.required]),
      mechanicalIssues: new FormGroup({
        warningLights: new FormControl(false),
        Electrical: new FormControl(false),
        Mechanical: new FormControl(false),
        Suspension: new FormControl(false),
        Other: new FormControl(false),
      }),
      doesAllCarWheelInflated: new FormControl(this.vechileCondition.externalConditions.doesAllCarWheelInflated, Validators.required),
      doesAllGlassorLightCracked: new FormControl(this.vechileCondition.externalConditions.doesAllGlassorLightCracked, Validators.required),
      doesBodyDamage: new FormControl(this.vechileCondition.externalConditions.doesBodyDamage, Validators.required),
      doesBodyDamageSeverity: new FormControl(this.vechileCondition.externalConditions.doesBodyDamageSeverity),
      NoticeableDingsDentsScratches: new FormControl(this.vechileCondition.externalConditions.noticeableDingsDentsScratches, [Validators.required]),
      doesBodyPanelIntact: new FormControl(this.vechileCondition.externalConditions.doesBodyPanelIntact, [Validators.required]),
      doesAirbagsDeployedOrMissing: new FormControl(this.vechileCondition.externalConditions.doesAirbagsDeployedOrMissing, [Validators.required]),
      DoesCarSufferedFloodorFireDamage: new FormControl(this.vechileCondition.externalConditions.doesCarSufferedFloodorFireDamage, [Validators.required]),
      DoesInteriorIntact: new FormControl(this.vechileCondition.doesInteriorIntact, [Validators.required]),  
    });   
  }



  radioChange(event: any) {
    if (event.value === 'No Title') {
      this.reviewService.activateContactPage = true;
    } else {
      this.reviewService.activateContactPage = false;
    }
  }


  ngOnInit() {
    // this.vehicleDetailsFormGroup.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe((formData) => {
    //   console.log(formData)
    //   this.vechileQuestionaire = { ...formData }
    // })
    this.vehicleDetailsFormGroup.get('carTitle')?.valueChanges.subscribe((value) => {
      this.vechileQuestionaire.carTitle = value
    })
    this.vehicleDetailsFormGroup.get('carLoan')?.valueChanges.subscribe((value) => {
        this.vechileQuestionaire.carLoan = value
      if(!value) {
        this.vehicleDetailsFormGroup.get('loanAmount')?.setValue('0')
      }
    })
    this.vehicleDetailsFormGroup.get('loanAmount')?.valueChanges.subscribe((value) => {
      this.vechileQuestionaire.loanAmount = value
    })
    this.vehicleDetailsFormGroup.get('mileage')?.valueChanges.subscribe((value) => {
      this.vechileQuestionaire.mileage = value
    })
    this.vehicleDetailsFormGroup.get('color')?.valueChanges.subscribe((value) => {
      this.vechileQuestionaire.color = value
    })
    this.vehicleDetailsFormGroup.get('zipCode')?.valueChanges.subscribe((value) => {
      this.vechileQuestionaire.zipCode = value
    })
    this.vehicleDetailsFormGroup.get('vechileTransmissionType')?.valueChanges.subscribe((value) => {
      this.vechileQuestionaire.vechileTransmissionType = value
    })
    this.vehicleDetailsFormGroup.get('doesAllCarWheelInflated')?.valueChanges.subscribe((value) => {
      this.vechileCondition.externalConditions.doesAllCarWheelInflated = value
    })
    this.vehicleDetailsFormGroup.get('doesAllGlassorLightCracked')?.valueChanges.subscribe((value) => {
      this.vechileCondition.externalConditions.doesAllGlassorLightCracked = value
    })
    this.vehicleDetailsFormGroup.get('doesBodyDamage')?.valueChanges.subscribe((value) => {
      this.vechileCondition.externalConditions.doesBodyDamage = value
      if(!value) {
        this.vehicleDetailsFormGroup.get('doesBodyDamageSeverity')?.setValue('1')
      }
    })
    this.vehicleDetailsFormGroup.get('doesBodyDamageSeverity')?.valueChanges.subscribe((value) => {
      this.vechileCondition.externalConditions.doesBodyDamageSeverity = value
    })
    this.vehicleDetailsFormGroup.get('NoticeableDingsDentsScratches')?.valueChanges.subscribe((value) => {
      this.vechileCondition.externalConditions.noticeableDingsDentsScratches = value
    })
    this.vehicleDetailsFormGroup.get('doesBodyPanelIntact')?.valueChanges.subscribe((value) => {
      this.vechileCondition.externalConditions.doesBodyPanelIntact = value
    })
    this.vehicleDetailsFormGroup.get('doesAirbagsDeployedOrMissing')?.valueChanges.subscribe((value) => {
      this.vechileCondition.externalConditions.doesAirbagsDeployedOrMissing = value
    })
    this.vehicleDetailsFormGroup.get('doesAirbagsDeployedOrMissing')?.valueChanges.subscribe((value) => {
      this.vechileCondition.externalConditions.doesAirbagsDeployedOrMissing = value
    })
    this.vehicleDetailsFormGroup.get('DoesCarSufferedFloodorFireDamage')?.valueChanges.subscribe((value) => {
      this.vechileCondition.externalConditions.doesCarSufferedFloodorFireDamage = value
    })
    this.vehicleDetailsFormGroup.get('DoesInteriorIntact')?.valueChanges.subscribe((value) => {
      this.vechileCondition.doesInteriorIntact = value
    })

    this.vehicleDetailsFormGroup.statusChanges.subscribe(status => {
      if(status === 'VALID') {
        /*if(this.vechileCondition.externalConditions.doesBodyDamage === false && this.vechileCondition.externalConditions.doesBodyDamageSeverity != null) {
          this.stepThreeValidated.emit(false)
          return;
        }else {
          this.stepThreeValidated.emit(true)
        } */
        // this.stepThreeValidated.emit(true)
        this.reviewService.vehicleBodyConditionPageStepper= true;
      } else {
        // this.stepThreeValidated.emit(false)
        this.reviewService.vehicleBodyConditionPageStepper= false;     
      }
      this.onSubmit();
    })
    
    this.vehicleDetailsFormGroup.statusChanges.subscribe(status => {
      if(status === 'VALID') {
        if(this.vechileQuestionaire.carLoan === true && (this.vechileQuestionaire.loanAmount === null || this.vechileQuestionaire.loanAmount === '0')) {
          this.stepOneValidated.emit(false);
          this.reviewService.vehicleDetailsPageStepper= false;
          return; 
        }else {
          this.stepOneValidated.emit(true);
        }
      }else {
        this.stepOneValidated.emit(false);
        this.reviewService.vehicleDetailsPageStepper= false;
      }
      this.onSubmit();
    })
   
  }

  onSubmit() {
    if(this.vehicleDetailsFormGroup.valid) {
      this.stepOneValidated.emit(true);
      this.reviewService.vehicleDetailsPageStepper= true;      
    }else {
      this.stepOneValidated.emit(false);
      this.reviewService.vehicleDetailsPageStepper= false;
    }
  }
  public ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  page(page:any,data:any){
    this.pageData=page
    this.getPageNumber.emit({page,data});
  }
}
