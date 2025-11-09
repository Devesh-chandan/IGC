import { useState, useEffect } from 'react'
import type { LucideIcon } from 'lucide-react' // Import the LucideIcon type
import { MetricCard } from './MetricCard'
import { ModuleCard } from './ModuleCard'
import { 
  Activity, 
  Wind, 
  Trash2, 
  Thermometer, 
  CloudRain,
  Car,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  Search, // Import Search icon
  Building, // Import Building icon
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Input } from './ui/input' // Import Input
import { Button } from './ui/button' // Import Button

// --- Type definitions for our city data ---
type Metric = {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon; // Corrected type
  trend: number[];
};

type Module = {
  title: string;
  description: string;
  icon: LucideIcon; // Corrected type
  status: 'active' | 'warning' | 'critical' | 'optimal';
  metrics: { label: string; value: string }[];
};

type CityData = {
  name: string;
  metrics: Metric[];
  modules: Module[];
};

// --- FIX: Define the type for the MOCK_CITY_DATA object ---
type CityDataMap = {
  [key: string]: CityData;
};

// --- Mock Data Structure ---
const MOCK_CITY_DATA: CityDataMap = { // <-- FIX: Apply the CityDataMap type here
  'greencity': {
    name: 'GreenCity (Default)',
    metrics: [
      {
        title: 'Air Quality Index',
        value: '42',
        change: '↓ 12% from last week',
        changeType: 'positive' as const,
        icon: Wind,
        trend: [40, 50, 45, 60, 55, 70, 42]
      },
      {
        title: 'Traffic Flow',
        value: '78%',
        change: '↑ 8% improvement',
        changeType: 'positive' as const,
        icon: Car,
        trend: [60, 65, 70, 68, 72, 75, 78]
      },
      {
        title: 'Waste Collection',
        value: '94%',
        change: '↑ 3% efficiency',
        changeType: 'positive' as const,
        icon: Trash2,
        trend: [88, 90, 89, 91, 92, 93, 94]
      },
      {
        title: 'Flood Risk',
        value: 'Low',
        change: '8 zones monitored',
        changeType: 'neutral' as const,
        icon: CloudRain,
        trend: [20, 20, 15, 25, 30, 20, 15]
      }
    ],
    modules: [
      {
        title: 'AI Traffic Optimizer',
        description: 'Dynamic routing & EV slot booking to cut congestion.',
        icon: Car,
        status: 'optimal' as const,
        metrics: [
          { label: 'Avg Speed', value: '45 km/h' },
          { label: 'Congestion', value: '-22%' },
          { label: 'Emissions', value: '-18%' },
          { label: 'EV Slots', value: '847' }
        ]
      },
      {
        title: 'Air Quality Monitor',
        description: 'Real-time pollution tracking and intervention',
        icon: Wind,
        status: 'active' as const,
        metrics: [
          { label: 'PM2.5', value: '28 μg/m³' },
          { label: 'NO₂', value: '42 ppb' },
          { label: 'O₃', value: '35 ppb' },
          { label: 'Sensors', value: '234' }
        ]
      },
      {
        title: 'Smart Waste Tracker',
        description: 'Optimized collection routes and recycling analytics',
        icon: Trash2,
        status: 'optimal' as const,
        metrics: [
          { label: 'Collection', value: '94%' },
          { label: 'Recycled', value: '67%' },
          { label: 'Trucks', value: '45' },
          { label: 'Bins', value: '1.2K' }
        ]
      },
      {
        title: 'Energy Advisor',
        description: 'Building & home consumption optimization',
        icon: Activity,
        status: 'optimal' as const,
        metrics: [
          { label: 'Savings', value: '32%' },
          { label: 'Buildings', value: '567' },
          { label: 'Usage', value: '2.4 GWh' },
          { label: 'CO₂', value: '-890t' }
        ]
      }
    ]
  },
  'new york': {
    name: 'New York',
    metrics: [
      {
        title: 'Air Quality Index',
        value: '58',
        change: '↑ 5% from last week',
        changeType: 'negative' as const,
        icon: Wind,
        trend: [50, 52, 55, 53, 56, 57, 58]
      },
      {
        title: 'Traffic Flow',
        value: '62%',
        change: '↓ 3% improvement',
        changeType: 'negative' as const,
        icon: Car,
        trend: [65, 64, 63, 65, 62, 63, 62]
      },
      {
        title: 'Waste Collection',
        value: '88%',
        change: '↑ 1% efficiency',
        changeType: 'positive' as const,
        icon: Trash2,
        trend: [85, 86, 87, 86, 88, 87, 88]
      },
      {
        title: 'Flood Risk',
        value: 'Medium',
        change: '15 zones monitored',
        changeType: 'neutral' as const,
        icon: CloudRain,
        trend: [30, 35, 40, 38, 42, 40, 45]
      }
    ],
    modules: [
      {
        title: 'AI Traffic Optimizer',
        description: 'Dynamic routing & EV slot booking to cut congestion.',
        icon: Car,
        status: 'warning' as const,
        metrics: [
          { label: 'Avg Speed', value: '28 km/h' },
          { label: 'Congestion', value: '+5%' },
          { label: 'Emissions', value: '-4%' },
          { label: 'EV Slots', value: '1,500' }
        ]
      },
      {
        title: 'Air Quality Monitor',
        description: 'Real-time pollution tracking and intervention',
        icon: Wind,
        status: 'warning' as const,
        metrics: [
          { label: 'PM2.5', value: '45 μg/m³' },
          { label: 'NO₂', value: '60 ppb' },
          { label: 'O₃', value: '55 ppb' },
          { label: 'Sensors', value: '450' }
        ]
      },
      {
        title: 'Smart Waste Tracker',
        description: 'Optimized collection routes and recycling analytics',
        icon: Trash2,
        status: 'optimal' as const,
        metrics: [
          { label: 'Collection', value: '88%' },
          { label: 'Recycled', value: '55%' },
          { label: 'Trucks', value: '120' },
          { label: 'Bins', value: '5.5K' }
        ]
      },
      {
        title: 'Energy Advisor',
        description: 'Building & home consumption optimization',
        icon: Activity,
        status: 'active' as const,
        metrics: [
          { label: 'Savings', value: '18%' },
          { label: 'Buildings', value: '2,100' },
          { label: 'Usage', value: '8.1 GWh' },
          { label: 'CO₂', value: '-1,500t' }
        ]
      }
    ]
  },
  'london': {
    name: 'London',
    metrics: [
      {
        title: 'Air Quality Index',
        value: '35',
        change: '↓ 8% from last week',
        changeType: 'positive' as const,
        icon: Wind,
        trend: [45, 42, 40, 38, 35, 36, 35]
      },
      {
        title: 'Traffic Flow',
        value: '70%',
        change: '↑ 2% improvement',
        changeType: 'positive' as const,
        icon: Car,
        trend: [65, 68, 67, 70, 69, 70, 70]
      },
      {
        title: 'Waste Collection',
        value: '96%',
        change: '↑ 1% efficiency',
        changeType: 'positive' as const,
        icon: Trash2,
        trend: [92, 93, 94, 95, 95, 96, 96]
      },
      {
        title: 'Flood Risk',
        value: 'High',
        change: '22 zones monitored',
        changeType: 'negative' as const,
        icon: CloudRain,
        trend: [50, 55, 60, 58, 62, 65, 68]
      }
    ],
    modules: [
      {
        title: 'AI Traffic Optimizer',
        description: 'Dynamic routing & EV slot booking to cut congestion.',
        icon: Car,
        status: 'active' as const,
        metrics: [
          { label: 'Avg Speed', value: '35 km/h' },
          { label: 'Congestion', value: '-15%' },
          { label: 'Emissions', value: '-12%' },
          { label: 'EV Slots', value: '2,200' }
        ]
      },
      {
        title: 'Flood Risk Predictor',
        description: 'Predictive modeling to prevent urban flooding',
        icon: CloudRain,
        status: 'critical' as const,
        metrics: [
          { label: 'Risk Level', value: 'High' },
          { label: 'Zones', value: '22/60' },
          { label: 'Rainfall', value: '35mm' },
          { label: 'Forecast', value: '24h' }
        ]
      },
      {
        title: 'Smart Waste Tracker',
        description: 'Optimized collection routes and recycling analytics',
        icon: Trash2,
        status: 'optimal' as const,
        metrics: [
          { label: 'Collection', value: '96%' },
          { label: 'Recycled', value: '72%' },
          { label: 'Trucks', value: '90' },
          { label: 'Bins', value: '4.1K' }
        ]
      },
      {
        title: 'Energy Advisor',
        description: 'Building & home consumption optimization',
        icon: Activity,
        status: 'optimal' as const,
        metrics: [
          { label: 'Savings', value: '28%' },
          { label: 'Buildings', value: '1,800' },
          { label: 'Usage', value: '6.2 GWh' },
          { label: 'CO₂', value: '-1,200t' }
        ]
      }
    ]
  },
  'tokyo': {
    name: 'Tokyo',
    metrics: [
      {
        title: 'Air Quality Index',
        value: '40',
        change: '↓ 2% from last week',
        changeType: 'positive' as const,
        icon: Wind,
        trend: [42, 41, 40, 42, 40, 39, 40]
      },
      {
        title: 'Traffic Flow',
        value: '85%',
        change: '↑ 5% improvement',
        changeType: 'positive' as const,
        icon: Car,
        trend: [78, 80, 82, 81, 83, 85, 85]
      },
      {
        title: 'Waste Collection',
        value: '99%',
        change: '↑ 1% efficiency',
        changeType: 'positive' as const,
        icon: Trash2,
        trend: [97, 98, 98, 99, 99, 99, 99]
      },
      {
        title: 'Flood Risk',
        value: 'Low',
        change: '5 zones monitored',
        changeType: 'neutral' as const,
        icon: CloudRain,
        trend: [15, 20, 18, 22, 20, 19, 20]
      }
    ],
    modules: [
      {
        title: 'AI Traffic Optimizer',
        description: 'Dynamic routing & EV slot booking to cut congestion.',
        icon: Car,
        status: 'optimal' as const,
        metrics: [
          { label: 'Avg Speed', value: '50 km/h' },
          { label: 'Congestion', value: '-30%' },
          { label: 'Emissions', value: '-25%' },
          { label: 'EV Slots', value: '3,500' }
        ]
      },
      {
        title: 'Smart Waste Tracker',
        description: 'Optimized collection routes and recycling analytics',
        icon: Trash2,
        status: 'optimal' as const,
        metrics: [
          { label: 'Collection', value: '99%' },
          { label: 'Recycled', value: '85%' },
          { label: 'Trucks', value: '110' },
          { label: 'Bins', value: '6.0K' }
        ]
      },
      {
        title: 'Flood Risk Predictor',
        description: 'Predictive modeling to prevent urban flooding',
        icon: CloudRain,
        status: 'active' as const,
        metrics: [
          { label: 'Risk Level', value: 'Low' },
          { label: 'Zones', value: '5/80' },
          { label: 'Rainfall', value: '5mm' },
          { label: 'Forecast', value: '72h' }
        ]
      },
      {
        title: 'Energy Advisor',
        description: 'Building & home consumption optimization',
        icon: Activity,
        status: 'optimal' as const,
        metrics: [
          { label: 'Savings', value: '35%' },
          { label: 'Buildings', value: '3,000' },
          { label: 'Usage', value: '9.0 GWh' },
          { label: 'CO₂', value: '-2,500t' }
        ]
      }
    ]
  },
  // --- NEW CITIES ADDED ---
  'pune': {
    name: 'Pune',
    metrics: [
      {
        title: 'Air Quality Index',
        value: '151', // Moderate (based on PM2.5 of 55 µg/m³)
        change: 'PM10 at 70 µg/m³',
        changeType: 'negative' as const, // Not "Good"
        icon: Wind,
        trend: [140, 145, 150, 148, 152, 155, 151]
      },
      {
        title: 'Traffic Flow',
        value: '65%', // Moderate traffic
        change: '↓ 2% improvement',
        changeType: 'negative' as const,
        icon: Car,
        trend: [70, 68, 65, 66, 67, 65, 65]
      },
      {
        title: 'Waste Collection',
        value: '90%',
        change: '↑ 2% efficiency',
        changeType: 'positive' as const,
        icon: Trash2,
        trend: [85, 88, 87, 89, 90, 90, 90]
      },
      {
        title: 'Flood Risk',
        value: 'Medium',
        change: '12 zones monitored',
        changeType: 'neutral' as const,
        icon: CloudRain,
        trend: [30, 35, 40, 38, 45, 42, 40]
      }
    ],
    modules: [
      {
        title: 'AI Traffic Optimizer',
        description: 'Dynamic routing & EV slot booking for moderate traffic.',
        icon: Car,
        status: 'active' as const,
        metrics: [
          { label: 'Avg Speed', value: '38 km/h' },
          { label: 'Congestion', value: '-10%' },
          { label: 'Emissions', value: '-8%' },
          { label: 'EV Slots', value: '1,100' }
        ]
      },
      {
        title: 'Air Quality Monitor',
        description: 'Real-time pollution tracking for moderate zones.',
        icon: Wind,
        status: 'warning' as const,
        metrics: [
          { label: 'PM2.5', value: '55 µg/m³' },
          { label: 'PM10', value: '70 µg/m³' },
          { label: 'CO', value: '547 ppb' },
          { label: 'NO₂', value: '11 ppb' }
        ]
      },
      {
        title: 'Smart Waste Tracker',
        description: 'Optimized collection routes and recycling analytics',
        icon: Trash2,
        status: 'optimal' as const,
        metrics: [
          { label: 'Collection', value: '90%' },
          { label: 'Recycled', value: '60%' },
          { label: 'Trucks', value: '70' },
          { label: 'Bins', value: '3.0K' }
        ]
      },
      {
        title: 'Energy Advisor',
        description: 'Building & home consumption optimization',
        icon: Activity,
        status: 'active' as const,
        metrics: [
          { label: 'Savings', value: '25%' },
          { label: 'Buildings', value: '1,200' },
          { label: 'Usage', value: '5.0 GWh' },
          { label: 'CO₂', value: '-950t' }
        ]
      }
    ]
  },
  'delhi': {
    name: 'Delhi',
    metrics: [
      {
        title: 'Air Quality Index',
        value: '234', // Very Poor (based on PM2.5 of 184 µg/m³)
        change: '↑ 15% from last week',
        changeType: 'negative' as const,
        icon: Wind,
        trend: [320, 340, 350, 365, 370, 380, 234]
      },
      {
        title: 'Traffic Flow',
        value: '45%', // Severe traffic
        change: '↓ 5% improvement',
        changeType: 'negative' as const,
        icon: Car,
        trend: [55, 50, 48, 47, 45, 46, 45]
      },
      {
        title: 'Waste Collection',
        value: '75%', // Lower efficiency
        change: '↑ 1% efficiency',
        changeType: 'positive' as const,
        icon: Trash2,
        trend: [70, 72, 73, 72, 74, 75, 75]
      },
      {
        title: 'Flood Risk',
        value: 'High',
        change: '30 zones monitored',
        changeType: 'negative' as const,
        icon: CloudRain,
        trend: [50, 55, 60, 65, 70, 68, 70]
      }
    ],
    modules: [
      {
        title: 'AI Traffic Optimizer',
        description: 'High-congestion routing & EV slot management.',
        icon: Car,
        status: 'critical' as const,
        metrics: [
          { label: 'Avg Speed', value: '22 km/h' },
          { label: 'Congestion', value: '+18%' },
          { label: 'Emissions', value: '-2%' },
          { label: 'EV Slots', value: '4,000' }
        ]
      },
      {
        title: 'Air Quality Monitor',
        description: 'Severe pollution alerts and government advisories.',
        icon: Wind,
        status: 'critical' as const,
        metrics: [
          { label: 'PM2.5', value: '184 µg/m³' },
          { label: 'PM10', value: '238 µg/m³' },
          { label: 'CO', value: '734 ppb' },
          { label: 'NO₂', value: '36 ppb' }
        ]
      },
      {
        title: 'Smart Waste Tracker',
        description: 'High-volume waste and landfill diversion analytics.',
        icon: Trash2,
        status: 'warning' as const,
        metrics: [
          { label: 'Collection', value: '75%' },
          { label: 'Recycled', value: '40%' },
          { label: 'Trucks', value: '250' },
          { label: 'Bins', value: '10.5K' }
        ]
      },
      {
        title: 'Energy Advisor',
        description: 'High-density urban energy optimization',
        icon: Activity,
        status: 'active' as const,
        metrics: [
          { label: 'Savings', value: '15%' },
          { label: 'Buildings', value: '5,000' },
          { label: 'Usage', value: '15 GWh' },
          { label: 'CO₂', value: '-3,000t' }
        ]
      }
    ]
  },
  'nagpur': {
    name: 'Nagpur',
    metrics: [
      {
        title: 'Air Quality Index',
        value: '47', // Green/Good (based on PM2.5 of 47 µg/m³)
        change: '↓ 5% from last week',
        changeType: 'positive' as const,
        icon: Wind,
        trend: [50, 48, 47, 46, 45, 45, 47]
      },
      {
        title: 'Traffic Flow',
        value: '88%', // Green
        change: '↑ 3% improvement',
        changeType: 'positive' as const,
        icon: Car,
        trend: [80, 82, 84, 85, 86, 88, 88]
      },
      {
        title: 'Waste Collection',
        value: '98%', // Green
        change: '↑ 1% efficiency',
        changeType: 'positive' as const,
        icon: Trash2,
        trend: [95, 96, 97, 97, 98, 98, 98]
      },
      {
        title: 'Flood Risk',
        value: 'Low',
        change: '3 zones monitored',
        changeType: 'neutral' as const,
        icon: CloudRain,
        trend: [10, 12, 15, 13, 15, 14, 15]
      }
    ],
    modules: [
      {
        title: 'AI Traffic Optimizer',
        description: 'Efficient routing & EV slot booking.',
        icon: Car,
        status: 'optimal' as const,
        metrics: [
          { label: 'Avg Speed', value: '52 km/h' },
          { label: 'Congestion', value: '-25%' },
          { label: 'Emissions', value: '-20%' },
          { label: 'EV Slots', value: '950' }
        ]
      },
      {
        title: 'Air Quality Monitor',
        description: 'Maintaining green zone air quality standards.',
        icon: Wind,
        status: 'optimal' as const,
        metrics: [
          { label: 'PM2.5', value: '47 µg/m³' },
          { label: 'CO', value: '379 ppb' },
          { label: 'NO₂', value: '9 ppb' },
          { label: 'SO₂', value: '5 ppb' }
        ]
      },
      {
        title: 'Smart Waste Tracker',
        description: 'High-efficiency collection and recycling.',
        icon: Trash2,
        status: 'optimal' as const,
        metrics: [
          { label: 'Collection', value: '98%' },
          { label: 'Recycled', value: '78%' },
          { label: 'Trucks', value: '40' },
          { label: 'Bins', value: '1.8K' }
        ]
      },
      {
        title: 'Energy Advisor',
        description: 'Promoting green energy and savings.',
        icon: Activity,
        status: 'optimal' as const,
        metrics: [
          { label: 'Savings', value: '38%' },
          { label: 'Buildings', value: '800' },
          { label: 'Usage', value: '3.0 GWh' },
          { label: 'CO₂', value: '-1,100t' }
        ]
      }
    ]
  }
};

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // --- State for Search and City Data ---
  const [searchQuery, setSearchQuery] = useState('');
  const [cityName, setCityName] = useState('GreenCity (Default)');
  const [cityData, setCityData] = useState<CityData>(MOCK_CITY_DATA['greencity']);
  const [error, setError] = useState('');

  // Set default data on initial render
  useEffect(() => {
    setCityData(MOCK_CITY_DATA['greencity']);
    setCityName(MOCK_CITY_DATA['greencity'].name);
  }, []);

  // --- Search Logic ---
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form from reloading the page
    const query = searchQuery.toLowerCase().trim();

    if (MOCK_CITY_DATA[query]) { // This line will no longer cause an error
      setCityData(MOCK_CITY_DATA[query]);
      setCityName(MOCK_CITY_DATA[query].name);
      setError(''); // Clear any previous error
    } else if (query === '') {
      // Reset to default if search is cleared
      setCityData(MOCK_CITY_DATA['greencity']);
      setCityName(MOCK_CITY_DATA['greencity'].name);
      setError('');
    } else {
      // Show error and reset to default
      setError(`City not found. Showing default data for ${MOCK_CITY_DATA['greencity'].name}.`);
      setCityData(MOCK_CITY_DATA['greencity']);
      setCityName(MOCK_CITY_DATA['greencity'].name);
    }
  };

  return (
    <section id="dashboard" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
              <Building /> Live Dashboard: {cityName}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-time environmental metrics and AI-powered insights for urban sustainability.
            </p>

            {/* --- Search Bar --- */}
            <form onSubmit={handleSearch} className="flex max-w-lg mx-auto gap-2 pt-4">
              <Input
                type="text"
                placeholder="Try: Pune, Delhi, Nagpur, London, etc."
                className="text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" size="lg" className="px-5">
                <Search className="w-5 h-5" />
              </Button>
            </form>
            {error && (
              <p className="text-sm text-destructive animate-fade-in">{error}</p>
            )}
          </div>

          {/* Metrics Grid - Now uses cityData state */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {cityData.metrics.map((metric) => (
              <MetricCard key={metric.title} {...metric} />
            ))}
          </div>

          {/* Modules - Now uses cityData state */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
              <TabsTrigger value="optimization">Optimization</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {cityData.modules.map((module) => (
                  <ModuleCard key={module.title} {...module} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cityData.modules.filter(m => ['Air Quality Monitor', 'Heat Island Monitor', 'Flood Risk Predictor'].includes(m.title)).map((module) => (
                  <ModuleCard key={module.title} {...module} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="optimization" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-">
                {cityData.modules.filter(m => ['AI Traffic Optimizer', 'Smart Waste Tracker', 'Energy Advisor'].includes(m.title)).map((module) => (
                  <ModuleCard key={module.title} {...module} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}