'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Card, Input, Button } from '@/components/ui';
import { calculateROI, formatCurrency } from '@/lib/utils';

interface ROICalculatorProps {
  onGeneratePDF?: (data: ROIData) => void;
}

interface ROIData {
  employees: number;
  avgSalary: number;
  hoursSavedPerWeek: number;
  softwareOverhead: number;
  results: {
    weekly: number;
    annual: number;
    efficiencyBoost: number;
  };
}

export default function ROICalculator({ onGeneratePDF }: ROICalculatorProps) {
  const [employees, setEmployees] = useState(10);
  const [avgSalary, setAvgSalary] = useState(75000);
  const [hoursSavedPerWeek, setHoursSavedPerWeek] = useState(20);
  const [softwareOverhead, setSoftwareOverhead] = useState(5000);
  const [email, setEmail] = useState('');
  const [showEmailCapture, setShowEmailCapture] = useState(false);

  const roi = calculateROI({
    employees,
    hoursSaved: hoursSavedPerWeek,
    avgSalary,
  });

  const netAnnualSavings = roi.annual - softwareOverhead;

  // Generate timeline data for 12 months
  const timelineData = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    const cumulativeSavings = roi.weekly * 4 * month - softwareOverhead;
    const breakEven = cumulativeSavings >= 0;

    return {
      month: `Month ${month}`,
      savings: Math.round(cumulativeSavings),
      breakEven: breakEven ? cumulativeSavings : 0,
    };
  });

  // Bar chart data: As-Is vs MAB-Optimized
  const comparisonData = [
    {
      category: 'Annual Labor Cost',
      asIs: Math.round(employees * avgSalary),
      optimized: Math.round(employees * avgSalary - roi.annual),
    },
    {
      category: 'Time Spent on Tasks',
      asIs: Math.round(hoursSavedPerWeek * 52),
      optimized: 0,
    },
    {
      category: 'Software Overhead',
      asIs: 0,
      optimized: softwareOverhead,
    },
  ];

  const handleDownloadPDF = () => {
    if (!email.trim()) {
      setShowEmailCapture(true);
      return;
    }

    const data: ROIData = {
      employees,
      avgSalary,
      hoursSavedPerWeek,
      softwareOverhead,
      results: roi,
    };

    if (onGeneratePDF) {
      onGeneratePDF(data);
    }

    // Simulate PDF generation
    alert(`PDF Report will be sent to: ${email}\n\n(PDF generation will be implemented in Phase 4 with backend integration)`);
    setShowEmailCapture(false);
  };

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <Card variant="gold" className="p-8">
        <h3 className="font-cinzel text-2xl font-bold mb-6 text-champagne-gold">
          Calculate Your ROI
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Number of Employees
            </label>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="w-full h-2 bg-midnight-navy/50 rounded-lg appearance-none cursor-pointer accent-champagne-gold mb-2"
            />
            <div className="text-center">
              <span className="text-3xl font-bold text-champagne-gold">{employees}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Average Salary
            </label>
            <input
              type="range"
              min="30000"
              max="200000"
              step="5000"
              value={avgSalary}
              onChange={(e) => setAvgSalary(Number(e.target.value))}
              className="w-full h-2 bg-midnight-navy/50 rounded-lg appearance-none cursor-pointer accent-champagne-gold mb-2"
            />
            <div className="text-center">
              <span className="text-3xl font-bold text-champagne-gold">
                {formatCurrency(avgSalary)}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Hours Saved Per Week
            </label>
            <input
              type="range"
              min="0"
              max="80"
              step="5"
              value={hoursSavedPerWeek}
              onChange={(e) => setHoursSavedPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-midnight-navy/50 rounded-lg appearance-none cursor-pointer accent-champagne-gold mb-2"
            />
            <div className="text-center">
              <span className="text-3xl font-bold text-champagne-gold">
                {hoursSavedPerWeek} hrs
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Annual Software Overhead
            </label>
            <input
              type="range"
              min="0"
              max="50000"
              step="1000"
              value={softwareOverhead}
              onChange={(e) => setSoftwareOverhead(Number(e.target.value))}
              className="w-full h-2 bg-midnight-navy/50 rounded-lg appearance-none cursor-pointer accent-champagne-gold mb-2"
            />
            <div className="text-center">
              <span className="text-3xl font-bold text-champagne-gold">
                {formatCurrency(softwareOverhead)}
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Results Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card variant="glass" className="gold-border p-6 text-center">
          <div className="text-sm text-off-white/60 mb-2">Weekly Savings</div>
          <motion.div
            key={roi.weekly}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="text-4xl font-cinzel font-bold text-champagne-gold"
          >
            {formatCurrency(roi.weekly)}
          </motion.div>
        </Card>

        <Card variant="glass" className="gold-border p-6 text-center">
          <div className="text-sm text-off-white/60 mb-2">Net Annual Savings</div>
          <motion.div
            key={netAnnualSavings}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="text-4xl font-cinzel font-bold text-champagne-gold"
          >
            {formatCurrency(netAnnualSavings)}
          </motion.div>
        </Card>

        <Card variant="glass" className="gold-border p-6 text-center">
          <div className="text-sm text-off-white/60 mb-2">Efficiency Boost</div>
          <motion.div
            key={roi.efficiencyBoost}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="text-4xl font-cinzel font-bold gold-gradient-text"
          >
            +{roi.efficiencyBoost}%
          </motion.div>
        </Card>
      </div>

      {/* Timeline Chart - 12 Month Projection */}
      <Card variant="gold" className="p-8">
        <h3 className="font-cinzel text-xl font-bold mb-6 text-champagne-gold">
          12-Month ROI Projection
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={timelineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(212, 175, 55, 0.1)" />
            <XAxis
              dataKey="month"
              stroke="rgba(248, 249, 250, 0.6)"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="rgba(248, 249, 250, 0.6)"
              style={{ fontSize: '12px' }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0B1A30',
                border: '1px solid #D4AF37',
                borderRadius: '8px',
              }}
              labelStyle={{ color: '#D4AF37' }}
              formatter={(value: number) => formatCurrency(value)}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="savings"
              stroke="#D4AF37"
              strokeWidth={3}
              dot={{ fill: '#D4AF37', r: 4 }}
              name="Cumulative Savings"
            />
            <Line
              type="monotone"
              dataKey="breakEven"
              stroke="#10B981"
              strokeWidth={2}
              strokeDasharray="5 5"
              name="Break-Even Point"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Comparison Bar Chart */}
      <Card variant="gold" className="p-8">
        <h3 className="font-cinzel text-xl font-bold mb-6 text-champagne-gold">
          As-Is vs MAB-Optimized
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(212, 175, 55, 0.1)" />
            <XAxis
              dataKey="category"
              stroke="rgba(248, 249, 250, 0.6)"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="rgba(248, 249, 250, 0.6)"
              style={{ fontSize: '12px' }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0B1A30',
                border: '1px solid #D4AF37',
                borderRadius: '8px',
              }}
              labelStyle={{ color: '#D4AF37' }}
              formatter={(value: number) => formatCurrency(value)}
            />
            <Legend />
            <Bar dataKey="asIs" fill="#EF4444" name="Current State" />
            <Bar dataKey="optimized" fill="#D4AF37" name="MAB-Optimized" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* PDF Download Section */}
      <Card variant="glass" className="gold-border p-8">
        <h3 className="font-cinzel text-xl font-bold mb-4 text-champagne-gold">
          Download Full ROI Report
        </h3>
        <p className="text-off-white/80 mb-6">
          Get a comprehensive PDF report with detailed analysis and recommendations.
        </p>

        {showEmailCapture ? (
          <div className="space-y-4">
            <Input
              type="email"
              label="Email Address"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex gap-4">
              <Button onClick={handleDownloadPDF} className="flex-1">
                Generate PDF Report
              </Button>
              <Button
                variant="ghost"
                onClick={() => setShowEmailCapture(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <Button onClick={() => setShowEmailCapture(true)} size="lg">
            Download PDF Report
          </Button>
        )}
      </Card>
    </div>
  );
}
