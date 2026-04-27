import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { API_URL } from '../../config'; // 상위 폴더의 config 불러오기

export default function HomeScreen() {
  const [connectionStatus, setConnectionStatus] = useState('연결 확인 중...');

  useEffect(() => {
    fetch(`${API_URL}/`)
      .then((response) => response.text())
      .then((text) => {
        setConnectionStatus(`서버 상태: ${text}`);
      })
      .catch((error) => {
        setConnectionStatus('서버 연결 실패');
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>기자재 대여 시스템</Text>
      <Text style={styles.status}>{connectionStatus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  status: { fontSize: 16, color: 'blue' },
});